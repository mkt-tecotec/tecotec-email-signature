import React from 'react';

const imgStep1 = "./assets/thunderbird-step1.png";
const imgStep2 = "./assets/thunderbird-step2.png";

const ThunderbirdInstructions = () => {
    const imgStyle = {
        width: '100%',
        maxWidth: '450px',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)',
        borderRadius: '6px',
        marginTop: '11px',
        marginBottom: '11px'
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
            {/* Content Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                width: '100%',
                maxWidth: '954px',
                marginTop: '11px'
            }}>
                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    Tải chữ ký của bạn dưới dạng file HTML.<br/>
                    Với ứng dụng Mozilla Thunderbird đang mở, nhấp vào biểu tượng Menu ở góc trên cùng bên phải, sau đó dưới Options chọn Account Settings.<br/>
                    Từ cửa sổ pop-up Account Settings, nhấp chọn hộp kiểm Attach the signature from a file instead (text, HTML, or image) và chọn chữ ký HTML bạn vừa tải xuống cho ô nhập tệp tin bên dưới.
                </div>

                <img src={imgStep1} alt="Thunderbird Account Settings" style={imgStyle} />

                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    Nhấp OK ở dưới cùng bên phải của cửa sổ popup, soạn một email mới và tận hưởng chữ ký mới của bạn!<br/>
                    <strong>Quan trọng:</strong> Thunderbird sẽ hiển thị viền đỏ xung quanh các phần tử trong chữ ký email của bạn. Đừng lo lắng – chúng sẽ không hiển thị với người nhận khi bạn gửi email cho họ.
                </div>

                <img src={imgStep2} alt="Thunderbird Compose" style={imgStyle} />
            </div>
        </div>
    );
};

export default ThunderbirdInstructions;
