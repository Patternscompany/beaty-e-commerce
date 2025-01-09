import nodemailer from 'nodemailer';

export const sendMail = async (req, res) => {
    try {
        const { email, subject, html } = req.body;
    
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "pandureddypatterns@gmail.com",
            pass: "ahyg lifr qvvp qkpr",
        },
        });

        // const attachments = orderData.items.map((item, index) => ({
        //     filename: `item${index}.jpg`,
        //     path: item.image, // Local file path or URL
        //     cid: `item${index}`, // Content ID to match in HTML
        //   }));
    
        const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject,
        html,
        // attachments,
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ success: false, message: error.message });
        } else {
            res.json({ success: true, message: 'Email sent: ' + info.response });
        }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
    };
