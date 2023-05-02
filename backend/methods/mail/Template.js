export const getTemplate = (token) => {
    return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <META http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>* {
        box-sizing: border-box
    }

    body {
        margin: 0;
        padding: 0
    }

    #m_MessageViewBody a {
        color: inherit;
        text-decoration: none
    }

    p {
        line-height: inherit
    }

    .m_desktop_hide, .m_desktop_hide table {
        display: none;
        max-height: 0;
        overflow: hidden
    }

    .m_image_block img + div {
        display: none
    }

    @media (max-width: 720px) {
        .m_image_block img.m_big, .m_row-content {
            width: 100% !important
        }

        .m_mobile_hide {
            display: none
        }

        .m_stack .m_column {
            width: 100%;
            display: block
        }

        .m_mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0
        }

        .m_desktop_hide, .m_desktop_hide table {
            display: table !important;
            max-height: none !important
        }
    }</style>
</head>
<body><u></u>
<div style="background-color:#fff;margin:0;padding:0">
    <table class="m_nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
           style="background-color:#fff">
        <tbody>
        <tr>
            <td>
                <table class="m_row m_row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                       role="presentation" style="background-color:#1d1d1d">
                    <tbody>
                    <tr>
                        <td>
                            <table class="m_row-content m_stack" align="center" border="0" cellpadding="0"
                                   cellspacing="0" role="presentation"
                                   style="background-color:#1d1d1d;border-radius:0;color:#000;width:700px" width="700">
                                <tbody>
                                <tr>
                                    <td class="m_column m_column-1" width="100%"
                                        style="font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                        <table class="m_text_block m_block-1" width="100%" border="0" cellpadding="10"
                                               cellspacing="0" role="presentation" style="word-break:break-word">
                                            <tr>
                                                <td class="m_pad">
                                                    <div style="font-family:&#39;Trebuchet MS&#39;,Tahoma,sans-serif">
                                                        <div style="font-size:14px;font-family:Montserrat,&#39;Trebuchet MS&#39;,&#39;Lucida Grande&#39;,&#39;Lucida Sans Unicode&#39;,&#39;Lucida Sans&#39;,Tahoma,sans-serif;color:#555;line-height:1.5">
                                                            <p style="margin:0;font-size:14px;text-align:center"><span
                                                                    style="font-size:58px"><strong><span
                                                                    style="color:#ffffff">Potwierdź rejestrację</span></strong></span>
                                                            </p>
                                                            <p style="margin:0;font-size:14px;text-align:center"><span
                                                                    style="font-size:22px"><span style="color:#ffffff">Kliknij na obrazek Knura, aby potwierdzić!</span></span>
                                                            </p></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="m_image_block m_block-2" width="100%" border="0" cellpadding="0"
                                               cellspacing="0" role="presentation">
                                            <tr>
                                                <td class="m_pad" style="width:100%;padding-right:0;padding-left:0">
                                                    <div class="m_alignment" align="center" style="line-height:10px"><a
                                                            href="https://knuryknurow.pl/eventy/streetball/weryfikacja/${token}"
                                                            style="outline:none" target="_blank" rel="noreferrer"><img
                                                            src="https://knuryknurow.pl/img/knury_logo.svg"
                                                            class="m_big"
                                                            style="display:block;height:auto;border:0;width:495px;max-width:100%"
                                                            width="495"
                                                            alt="Logo Knury Knurów"
                                                            title="Logo Knury Knurów"></a></div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="m_text_block m_block-3" width="100%" border="0" cellpadding="10"
                                               cellspacing="0" role="presentation" style="word-break:break-word">
                                            <tr>
                                                <td class="m_pad">
                                                    <div style="font-family:&#39;Trebuchet MS&#39;,Tahoma,sans-serif">
                                                        <div style="font-size:14px;font-family:Montserrat,&#39;Trebuchet MS&#39;,&#39;Lucida Grande&#39;,&#39;Lucida Sans Unicode&#39;,&#39;Lucida Sans&#39;,Tahoma,sans-serif;color:#555;line-height:1.2">
                                                            <p style="margin:0;font-size:14px;text-align:center">
                                                                <a href="https://knuryknurow.pl/"
                                                                   style="text-decoration:none;color:#0068a5"
                                                                   rel="noopener noreferrer" target="_blank"><span
                                                                        style="color:#acacac">Knury Knurów 2023</span></a>
                                                            </p></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>`
};