import React from 'react';

const imgStep1 = "./assets/mailbird-step1.png";
const imgStep2 = "./assets/mailbird-step2.png";
const imgStep3 = "./assets/mailbird-step3.png";
const imgStep4 = "./assets/mailbird-step4.png";

const MailbirdInstructions = () => {
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
                    <li>Với Mailbird đang mở, nhấp vào Menu ở góc trên cùng bên trái và chọn tùy chọn Settings.</li>
                    <li>Khi modal Settings mở ra, nhấp vào tab Identities, chọn tài khoản của bạn và sau đó nhấp vào nút Edit</li>
                </ol>

                <img src={imgStep1} alt="Mailbird Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={3}>
                    <li>Sao chép/dán chữ ký của bạn vào trình chỉnh sửa chữ ký.</li>
                </ol>

                <img src={imgStep2} alt="Mailbird Signature Editor" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={4}>
                    <li>Nhấp vào tùy chọn Signature trong ngăn cài đặt để mở modal chữ ký.</li>
                    <li>Sao chép/dán chữ ký của bạn vào trình chỉnh sửa chữ ký.</li>
                </ol>

                <img src={imgStep3} alt="Mailbird Signature Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={6}>
                    <li>Nhấp vào OK để lưu chữ ký của bạn và đóng modal Settings.</li>
                    <li>Soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <img src={imgStep4} alt="Mailbird Compose Email" style={imgStyle} />
            </div>
        </div>
    );
};

export default MailbirdInstructions;
