import React from 'react';

const imgStep1 = "./images/guides/proton_mail_1.png";
const imgStep2 = "./images/guides/proton_mail_2.png";

const ProtonMailInstructions = () => {
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
            {/* Heading */}
            <h2 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#333333',
                margin: 0,
                lineHeight: '30px',
            }}>
                Hướng dẫn cài đặt
            </h2>

            {/* Header with Icon */}

            {/* Content Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                width: '100%',
                maxWidth: '954px',
                marginTop: '11px'
            }}>
                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={1}>
                    <li>Sau khi đăng nhập vào tài khoản Proton Mail của bạn (trên trang web hoặc ứng dụng máy tính để bàn), nhấp vào biểu tượng Settings ở góc trên cùng bên phải.</li>
                    <li>Trong thanh bên phải, nhấp vào All settings.</li>
                    <li>Từ menu cài đặt đầy đủ, hãy đi tới Identity and addresses.</li>
                    <li>Dán chữ ký email đã sao chép của bạn vào trình chỉnh sửa chữ ký.</li>
                </ol>

                <img src={imgStep1} alt="Proton Mail Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={5}>
                    <li>Nhấp vào Update để lưu các thay đổi của bạn và sau đó thoát khỏi cài đặt.</li>
                    <li>Soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <img src={imgStep2} alt="Proton Mail Compose" style={imgStyle} />
            </div>
        </div>
    );
};

export default ProtonMailInstructions;
