"use server";
import StatusMail from "@/app/email/StatusMail";
import { prisma } from "@/lib/prismadb";

export default async function putOrder(data) {
  try {
    await prisma.SiparisOrder.update({
      where: {
        id: data.id,
      },
      data: {
        status: data.status,
        error: data.message,
      },
    });

    const siparis = await prisma.siparisOrder.findUnique({
      where: {
        id: data.id,
      },
    });

    const nodemailer = await import("nodemailer");

    const { render } = await import("@react-email/render");

    let transporter = nodemailer.createTransport({
      host: "mail.farcialiusta.com",
      port: 465,
      secure: true, // upgrade later with STARTTLS
      auth: {
        user: "bilgi@farcialiusta.com",
        pass: "farcialiusta.1",
      },
    });

    let textstatus = null;
    let html = null;
    let mailOptions = null;
    switch (data.status) {
      case "ONAY":
        textstatus =
          "Siparişiniz onaylanmış olup, herhangi bir sorun tespit edilmemiştir. İşlem sırasına göre siparişiniz en kısa sürede işleme alınacaktır. Siparişinizde herhangi bir değişiklik yapılması gerekiyorsa, lütfen bu durumu en kısa sürede bildiriniz. İlginiz için teşekkür eder, iyi günler dileriz.";
        html = await render(
          <StatusMail siparis={siparis} status={textstatus} />,
          {
            pretty: true,
          },
        );
        mailOptions = {
          from: "bilgi@mayplastik.com",
          to: siparis.email,
          subject: "May Plastik - Siparişiniz Onaylandı ve İşleme Alınacaktır",
          html: html,
        };
        break;

      case "YAPILIYOR":
        textstatus =
          "Siparişiniz şu anda hazırlık aşamasındadır ve 3 ila 5 iş günü içerisinde tamamlanması planlanmaktadır. Siparişinizde herhangi bir değişiklik yapılması gerekiyorsa, lütfen bu durumu en kısa sürede bildiriniz.";
        html = await render(
          <StatusMail siparis={siparis} status={textstatus} />,
          {
            pretty: true,
          },
        );
        mailOptions = {
          from: "bilgi@mayplastik.com",
          to: siparis.email,
          subject:
            "May Plastik - Siparişiniz Hazırlanıyor - Değişiklik Bildirimi İçin Lütfen İletişime Geçin",
          html: html,
        };
        break;

      case "KARGO":
        textstatus =
          "Siparişinizin yapımı tamamlanmıştır ve en kısa sürede adresinize teslim edilecektir. Hizmetimizden memnun kaldıysanız, Google üzerinden yorum bırakmanızı rica ederiz. İlginiz için teşekkür ederiz.";
        html = await render(
          <StatusMail siparis={siparis} status={textstatus} />,
          {
            pretty: true,
          },
        );
        mailOptions = {
          from: "bilgi@mayplastik.com",
          to: siparis.email,
          subject:
            "May Plastik - Siparişiniz Hazır - Faturanız ve Teslimat Bilgileri",
          html: html,
          attachments: [
            {
              filename: "e-fatura.pdf",
              content: Buffer.from(buffer),
            },
          ],
        };
        break;

      case "FATURA":
        const pdfUrl = siparis?.fatura;
        const response = await axios.get(pdfUrl, {
          responseType: "arraybuffer",
        });

        const buffer = response.data;

        textstatus =
          "Siparişinize ait fatura, aşağıda ve e-posta ekinde yer almaktadır. Herhangi bir sorunuz olması durumunda, bizimle iletişime geçmekten çekinmeyiniz. Hizmetimizi tercih ettiğiniz için teşekkür eder, iyi günler dileriz";
        html = await render(
          <StatusMail siparis={siparis} status={textstatus} />,
          {
            pretty: true,
          },
        );
        mailOptions = {
          from: "bilgi@mayplastik.com",
          to: siparis.email,
          subject:
            "May Plastik - Siparişiniz Hazır - Faturanız ve Teslimat Bilgileri",
          html: html,
          attachments: [
            {
              filename: "e-fatura.pdf",
              content: Buffer.from(buffer),
            },
          ],
        };
        break;

      case "İADE":
        textstatus = `Siparişiniz iade edilecektir. İade sebebi: ${data.message}. Anlayışınız için teşekkür ederiz.`;
        html = await render(
          <StatusMail siparis={siparis} status={textstatus} />,
          {
            pretty: true,
          },
        );
        mailOptions = {
          from: "bilgi@mayplastik.com",
          to: siparis.email,
          subject:
            "May Plastik - Siparişiniz İade Edilecektir - Detaylar İçin Bilgilendirme",
          html: html,
        };
        break;

      case "HATA":
        textstatus = `Siparişinizde bir sorunla karşılaşılmıştır. Bu durumu çözebilmek için lütfen bizimle iletişime geçiniz. Sorun: ${data.message}. İlginiz için teşekkür ederiz.`;
        html = await render(
          <StatusMail siparis={siparis} status={textstatus} />,
          {
            pretty: true,
          },
        );
        mailOptions = {
          from: "bilgi@mayplastik.com",
          to: siparis.email,
          subject:
            "May Plastik - Siparişinizde Bir Sorun Tespit Edildi - Detaylar İçin Bizimle İletişime Geçin",
          html: html,
        };
        break;

      default:
        break;
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("E-posta gönderildi: " + info.response);
      }
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
