import React from 'react';

const imgStep1 = "./images/guides/mail_app__windows_10__1.jpg";
const imgStep2 = "./images/guides/mail_app__windows_10__2.jpg";
const imgStep3 = "./images/guides/mail_app__windows_10__1.jpg";
const imgStep4 = "./images/guides/mail_app__windows_10__2.jpg";

const Win10MailInstructions = () => {
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

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                width: '100%',
                maxWidth: '954px',
                marginTop: '11px'
            }}>
                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Cảnh báo:</strong> Windows 10 Mail nổi tiếng sử dụng công cụ kết xuất Microsoft Word cho email, điều này sẽ gây ra sự khác biệt với bản xem trước chữ ký của bạn. Khoảng cách và kích thước phông chữ sẽ xuất hiện hơi khác, hình ảnh thường bị nén, và các gạch chân sẽ được thêm vào liên kết của bạn. Đối với nhiều người nhận, các liên kết này sẽ xuất hiện với gạch chân màu xanh, không phụ thuộc vào màu sắc bạn đặt cho chúng.
                    </p>
                    <p style={{ margin: 0 }}>
                        Nếu bạn thực sự quan tâm đến việc chữ ký email của bạn là "hoàn hảo từng pixel" thì chúng tôi khuyên bạn nên sử dụng một ứng dụng email khác sử dụng công cụ kết xuất HTML như <a href="https://outlook.com/" style={{ color: '#0066cc', textDecoration: 'underline' }}>Outlook.com</a>.
                    </p>
                </div>

                <img src={imgStep1} alt="Windows 10 Mail Warning" style={{...imgStyle, maxWidth: '450px' }} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={1}>
                    <li>Với Windows 10 Mail đang mở, nhấp vào biểu tượng Cài đặt (Settings cog) ở dưới cùng của thanh bên trái để mở ngăn cài đặt.</li>
                </ol>

                <img src={imgStep2} alt="Windows 10 Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={2}>
                    <li>Nhấp vào tùy chọn Chữ ký (Signature) trong ngăn cài đặt để mở hộp thoại chữ ký.</li>
                    <li>Sao chép và dán chữ ký của bạn vào trình chỉnh sửa chữ ký.</li>
                </ol>

                <img src={imgStep3} alt="Windows 10 Signature Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={4}>
                    <li>Nhấp vào Save (Lưu) để đóng hộp thoại chữ ký.</li>
                    <li>Soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <img src={imgStep4} alt="Windows 10 Compose" style={imgStyle} />
            </div>
        </div>
    );
};

export default Win10MailInstructions;
