import React from 'react';

const imgStep1 = "./images/guides/yahoo__web_mail__1.jpg";
const imgStep2 = "./images/guides/yahoo__web_mail__2.jpg";
const imgStep3 = "./images/guides/yahoo__web_mail__3.jpg";

const YahooWebmailInstructions = () => {
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
                {/* Warning section */}
                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Không may: </strong>
                        Yahoo Mail thực hiện các điều chỉnh tức thì đối với hình ảnh trong chữ ký của bạn, điều này nằm ngoài kiểm soát của chúng tôi. Điều này có thể gây ra vấn đề khi hiển thị trong một số ứng dụng email nếu hình ảnh của bạn bị thu nhỏ từ kích thước tự nhiên. Chúng tôi đã nhận thấy rằng những hình ảnh sau đang bị thu nhỏ:
                    </p>
                    <ul style={{ margin: '0 0 11px 0', paddingLeft: '21px' }}>
                        <li>Logo (276px → 150px)</li>
                    </ul>
                    <p style={{ margin: 0 }}>
                        Mặc dù chữ ký có thể trông ổn trong bản xem trước Yahoo Mail, nhưng các nhận người dùng các ứng dụng email Microsoft như Outlook 2019 sẽ nhìn thấy bất kỳ hình ảnh nào ở kích thước đầy đủ (ví dụ dưới đây).
                    </p>
                </div>

                <img src={imgStep1} alt="Yahoo WebMail Example" style={imgStyle} />

                {/* Instructions section */}
                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: '0 0 11px 0' }}>
                        Vui lòng kiểm tra chữ ký của bạn bằng cách gửi nó cho một người nhận sử dụng ứng dụng email Windows. Nếu vấn đề vẫn tồn tại, vui lòng liên hệ với chúng tôi để được hỗ trợ tốt nhất.
                    </p>
                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Quan trọng:</strong> Sau khi thay đổi kích thước, hình ảnh của bạn sẽ hiển thị chính xác trong các ứng dụng email Windows; tuy nhiên, chúng có thể xuất hiện hơi mờ trên máy tính bảng, điện thoại và các màn hình độ phân giải cao khác. Nếu bạn không muốn chấp nhận điều này, chúng tôi khuyên bạn nên sử dụng một ứng dụng email khác.
                    </p>
                </div>

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={1}>
                    <li>Sau khi đăng nhập vào tài khoản Yahoo của bạn, nhấp vào biểu tượng Settings ở góc trên cùng bên phải.</li>
                    <li>Với danh sách thả xuống mở, nhấp vào Cài đặt khác.</li>
                    <li>Nhấp vào Soạn Email từ các tùy chọn cài đặt.</li>
                    <li>Nhấp vào nút + ở cuối cột giữa.</li>
                    <li>Sao chép/dán chữ ký email mới của bạn vào trình chỉnh sửa chữ ký.</li>
                </ol>

                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: 0 }}>
                        <strong>Cảnh báo:</strong> Chrome hiện đang gặp lỗi khi sao chép/dán, gây ra việc các liên kết trong chữ ký của bạn bị gạch chân. Vui lòng hoàn thành quá trình cài đặt bằng cách sử dụng trình duyệt khác, chẳng hạn như Mozilla Firefox hoặc Safari, để giải quyết vấn đề. Bạn có thể quay lại sử dụng Chrome sau khi quá trình cài đặt hoàn tất.
                    </p>
                </div>

                <img src={imgStep2} alt="Yahoo WebMail Settings" style={imgStyle} />

                {/* Tip section */}
                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Mẹo:</strong> Nếu chữ ký của bạn không xuất hiện trong bản xem trước bên phải, hãy di chuyển con trỏ văn bản trong trình chỉnh sửa chữ ký lên đầu ngăn và nhấn phím enter.
                    </p>
                </div>

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={6}>
                    <li>Chữ ký của bạn sau đó sẽ lưu tự động. Đóng trang cài đặt, soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <img src={imgStep3} alt="Yahoo WebMail Compose" style={imgStyle} />
            </div>
        </div>
    );
};

export default YahooWebmailInstructions;
