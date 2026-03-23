import React from 'react';

const imgStep1 = "./images/guides/microsoft_outlook_modern__web__1.jpg";
const imgStep2 = "./images/guides/microsoft_outlook_modern__web__1.jpg";
const imgStep3 = "./images/guides/microsoft_outlook_modern__web__1.jpg";

const OutlookWebmailInstructions = () => {
    const imgStyle = {
        width: '100%',
        maxWidth: '450px',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)',
        borderRadius: '6px',
    };

    const listStyle = {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '21px',
        color: '#000000',
        fontFamily: '"Inter", sans-serif',
        margin: 0,
        paddingLeft: '21px',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', width: '100%', maxWidth: '1160px', fontFamily: '"Inter", sans-serif' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                width: '100%',
                maxWidth: '954px',
            }}>
                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={1}>
                    <li>Trong Outlook (Modern), nhấp vào biểu tượng Settings ở góc trên cùng bên phải.</li>
                    <li>Khi bảng cài đặt mở ra, nhấp vào Account trong menu bên trái.</li>
                    <li>Chọn Signatures.</li>
                </ol>

                <p style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0 }}>
                    Nếu bạn chưa có, nhấp vào Add signature.
                </p>

                <img src={imgStep1} alt="Outlook Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={4}>
                    <li>Sao chép/dán chữ ký email mới của bạn vào trình chỉnh sửa chữ ký (không phải trường tên chữ ký).</li>
                </ol>

                <p style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0 }}>
                    Đảm bảo chữ ký xuất hiện trong khu vực trình chỉnh sửa lớn bên dưới thanh công cụ.
                </p>

                <img src={imgStep2} alt="Outlook Signature Editor" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={5}>
                    <li>Bật các tùy chọn để tự động bao gồm chữ ký của bạn trong tin nhắn mới và trả lời, sau đó nhấp vào Save.</li>
                    <li>Soạn một email mới để xem chữ ký của bạn hoạt động.</li>
                </ol>

                <img src={imgStep3} alt="Outlook Compose Email" style={imgStyle} />
            </div>
        </div>
    );
};

export default OutlookWebmailInstructions;
