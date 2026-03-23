import React from 'react';

const imgStep1 = "./assets/emclient-step1.png";
const imgStep2 = "./assets/emclient-step2.png";
const imgStep3 = "./assets/emclient-step3.png";
const imgStep4 = "./assets/emclient-step4.png";
const imgStep5 = "./assets/emclient-step5.png";

const EmClientInstructions = () => {
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
                    <li>Với ứng dụng Em Client đang mở, nhấp vào Menu ở phía trên bên trái cửa sổ (bên cạnh logo), sau đó trong tùy chọn Tools, nhấp vào liên kết Settings.</li>
                    <li>Từ cửa sổ Settings pop-up, nhấp vào tab Mail, và sau đó nhấp vào sub tab Templates and Signatures.</li>
                </ol>

                <img src={imgStep1} alt="Em Client Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={3}>
                    <li>Nhấp vào nút Signatures…</li>
                    <li>Từ cửa sổ pop-up Signatures, nhấp vào Add Signature.</li>
                    <li>Đặt tên cho chữ ký của bạn và sao chép/dán chữ ký của bạn vào trình chỉnh sửa.</li>
                </ol>

                <img src={imgStep2} alt="Em Client Signature Editor" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={6}>
                    <li>Nhấp vào OK để lưu chữ ký của bạn.</li>
                    <li>Đảm bảo chữ ký của bạn bây giờ xuất hiện trong cửa sổ pop-up Signature và nhấp vào OK lần nữa.</li>
                </ol>

                <img src={imgStep3} alt="Em Client Signature Confirmation" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={8}>
                    <li>Chọn chữ ký mới của bạn cho các tùy chọn sau.</li>
                </ol>

                <img src={imgStep4} alt="Em Client Signature Selection" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={9}>
                    <li>Nhấp vào Apply để lưu các thay đổi của bạn và sau đó OK để đóng cửa sổ pop-up Settings.</li>
                    <li>Soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: 0 }}>
                        <strong>Quan trọng:</strong> Đường viền đứt nét sẽ xuất hiện trong bản xem trước trình soạn email. Người nhận của bạn sẽ không thấy các đường viền này khi họ nhận được email của bạn.
                    </p>
                </div>

                <img src={imgStep5} alt="Em Client Compose Email" style={imgStyle} />
            </div>
        </div>
    );
};

export default EmClientInstructions;
