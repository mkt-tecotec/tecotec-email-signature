import React from 'react';

const imgStep1 = "./images/guides/gmail__web_mail__1.jpg";

const GmailWebmailInstructions = () => {
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
                    <li>Sau khi đăng nhập vào tài khoản Gmail của bạn, nhấp vào biểu tượng Settings ở góc trên cùng bên phải.</li>
                    <li>Chọn tùy chọn thả xuống See all settings.</li>
                    <li>Cuộn xuống phần Signature và nhấp vào "Tạo mới".</li>
                    <li>Nhập tên chữ ký mới của bạn vào modal và nhấp vào "Tạo".</li>
                    <li>Sao chép/dán chữ ký của bạn vào trình chỉnh sửa chữ ký.</li>
                    <li>Chọn chữ ký mới của bạn trong danh sách thả xuống "Sử dụng cho Email mới".</li>
                </ol>

                <p style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0 }}>
                    <strong>Quan trọng: </strong>
                    Ứng dụng Gmail iOS sẽ tìm kiếm cài đặt này để xác định chữ ký nào cần sử dụng khi gửi email.
                </p>

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={7}>
                    <li>Đảm bảo bạn cuộn xuống cuối trang và nhấp vào Lưu thay đổi.</li>
                    <li>Soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <img src={imgStep1} alt="Gmail WebMail Settings" style={imgStyle} />
            </div>
        </div>
    );
};

export default GmailWebmailInstructions;
