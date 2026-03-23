import React from 'react';

const imgStep1 = "./images/guides/airmail__macos__1.jpg";
const imgStep2 = "./images/guides/airmail__macos__2.jpg";

const AirmailInstructions = () => {
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
                <li>Với ứng dụng Airmail đang mở, nhấp vào Airmail và sau đó chọn Preferences ở góc trên cùng bên trái của màn hình.</li>
                <li>Từ cửa sổ tùy chọn, nhấp vào tab Accounts và sau đó nhấp vào biểu tượng cài đặt trên tài khoản email của bạn.</li>
                <li>Nhấp vào tab Signature và sau đó nhấp vào + để tạo một chữ ký mới.</li>
                <li>Nhấp vào tùy chọn HTML trong trình chỉnh sửa chữ ký và sao chép/dán chữ ký của bạn vào cột bên trái.</li>
            </ol>

            <img src={imgStep1} alt="Airmail Accounts Settings" style={imgStyle} />

            <p style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0 }}>
                <strong>Quan trọng: </strong>
                Bằng cách sao chép/dán chữ ký của bạn vào trình chỉnh sửa HTML này, bạn sẽ đảm bảo rằng hình ảnh chữ ký không được gửi dưới dạng tệp đính kèm.
            </p>

            <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={5}>
                <li>Nhấp vào Save, đóng modal Settings, soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
            </ol>

            <img src={imgStep2} alt="Airmail Compose Email" style={imgStyle} />
            </div>
        </div>
    );
};

export default AirmailInstructions;
