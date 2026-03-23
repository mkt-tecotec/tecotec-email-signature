import React from 'react';

const imgStep1 = "./images/guides/spark__macos__1.jpg";
const imgStep2 = "./images/guides/spark__macos__2.jpg";
const imgStep3 = "./images/guides/spark__macos__3.jpg";

const SparkInstructions = () => {
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
                    <li>Với ứng dụng Spark đang mở, nhấp vào Mail và sau đó chọn Preferences ở góc trên cùng bên trái của màn hình.</li>
                    <li>Từ cửa sổ tùy chọn, nhấp vào tab Signature và nhấp vào nút Add Signature nếu bạn không có bất kỳ chữ ký hiện có nào.</li>
                </ol>

                <img src={imgStep1} alt="Spark Preferences" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={3}>
                    <li>Sao chép/dán chữ ký của bạn vào trình chỉnh sửa chữ ký.</li>
                </ol>

                <p style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0 }}>
                    <strong>Quan trọng: </strong>
                    Đảm bảo rằng "Luôn phù hợp với phông chữ tin nhắn mặc định của tôi" không được chọn.
                </p>

                <img src={imgStep2} alt="Spark Signature Editor" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={4}>
                    <li>Đóng modal Settings, soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <img src={imgStep3} alt="Spark Compose Email" style={imgStyle} />
            </div>
        </div>
    );
};

export default SparkInstructions;
