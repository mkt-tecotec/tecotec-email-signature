import React from 'react';

const imgStep1 = "./images/guides/microsoft_outlook_classic__windows__1.jpg";
const imgStep2 = "./images/guides/microsoft_outlook_classic__windows__2.jpg";
const imgStep3 = "./images/guides/microsoft_outlook_classic__windows__3.jpg";
const imgStep4 = "./images/guides/microsoft_outlook_classic__windows__4.jpg";

const OutlookClassicInstructions = () => {
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


            {/* Content Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                width: '100%',
                maxWidth: '954px',
                marginTop: '11px'
            }}>
                {/* Warning section */}
                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Cảnh báo: </strong>
                        Outlook nổi tiếng sử dụng công cụ kết xuất Microsoft Word cho email sẽ gây ra sự khác biệt với bản xem trước chữ ký của bạn. Khoảng cách và kích thước phông chữ sẽ xuất hiện hơi khác, hình ảnh thường bị nén, và các gạch chân sẽ được thêm vào liên kết của bạn. Đối với nhiều người nhận, các liên kết này sẽ xuất hiện với gạch chân màu xanh, không phụ thuộc vào màu sắc bạn đặt cho chúng.
                    </p>
                    <p style={{ margin: 0 }}>
                        Nếu bạn thực sự quan tâm đến việc chữ ký email của bạn là "hoàn hảo từng pixel" thì chúng tôi khuyên bạn nên sử dụng một ứng dụng email khác sử dụng công cụ kết xuất HTML như <a href="https://outlook.com/" style={{ color: '#0066cc', textDecoration: 'underline' }}>Outlook.com</a>.
                    </p>
                </div>

                <img src={imgStep1} alt="Outlook Classic Compose" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={1}>
                    <li>Với Outlook đang mở, nhấp vào nút New Email để hiển thị trình soạn email.</li>
                    <li>Nhấp vào Signature trong thanh công cụ tin nhắn và sau đó chọn tùy chọn Signatures để mở modal Signature Settings.</li>
                </ol>

                <img src={imgStep2} alt="Outlook Classic Signature Options" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={3}>
                    <li>Chọn chữ ký hiện có bạn muốn chỉnh sửa hoặc nhấp vào New để tạo chữ ký mới.</li>
                    <li>Sao chép/dán chữ ký của bạn vào trình chỉnh sửa chữ ký.</li>
                </ol>

                <img src={imgStep3} alt="Outlook Classic Signature Editor" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={5}>
                    <li>Nhấp vào OK để thoát khỏi modal Signature Settings.</li>
                    <li>Bây giờ dưới tùy chọn Signature trong thanh công cụ tin nhắn, bạn sẽ thấy chữ ký của mình. Từ danh sách thả xuống này, nhấp vào chữ ký của bạn để chèn nó vào nội dung email.</li>
                </ol>

                <img src={imgStep4} alt="Outlook Classic Insert Signature" style={imgStyle} />
            </div>
        </div>
    );
};

export default OutlookClassicInstructions;
