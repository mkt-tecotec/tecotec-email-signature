import React from 'react';

const imgStep1 = "./assets/outlook-ios-step1.png";
const imgStep2 = "./assets/outlook-ios-step2.png";
const imgStep3 = "./assets/outlook-ios-step3.png";
const imgStep4 = "./assets/outlook-ios-step4.png";
const imgStep5 = "./assets/outlook-ios-step5.png";

const OutlookIosInstructions = () => {
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
                        <strong>Cảnh báo: </strong>
                        Chữ ký HTML không được ứng dụng Outlook iOS hỗ trợ tốt trong quá khứ. Một thời điểm đáng tin cậy, đánh giá mới nhất của chúng tôi về ứng dụng cho thấy rằng các liên kết email và số điện thoại trong chữ ký của bạn sẽ bị xóa khiến chúng xuất hiện màu xanh cho một số người nhận của bạn (tùy thuộc vào ứng dụng email họ đang sử dụng). Nếu bạn thực sự quan tâm đến việc chữ ký email của bạn là "hoàn hảo từng pixel" thì chúng tôi khuyên bạn nên sử dụng một ứng dụng email khác trên thiết bị của bạn như ứng dụng iOS Mail.
                    </p>
                </div>

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={1}>
                    <li>Gửi cho chính bạn URL chia sẻ và mở nó trên thiết bị iOS của bạn.</li>
                    <li>Trong ứng dụng Outlook iOS, nhấp vào biểu tượng hồ sơ ở góc trên cùng bên trái để hiển thị ngăn menu.</li>
                </ol>

                <img src={imgStep1} alt="Outlook iOS Profile Menu" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={3}>
                    <li>Bây giờ nhấp vào biểu tượng cài đặt ở góc dưới cùng bên trái để mở cài đặt.</li>
                </ol>

                <img src={imgStep2} alt="Outlook iOS Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={4}>
                    <li>Dưới Email, nhấp vào tùy chọn Signature.</li>
                </ol>

                <img src={imgStep3} alt="Outlook iOS Email Settings" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={5}>
                    <li>Sao chép/dán chữ ký của bạn vào trình chỉnh sửa chữ ký (nhấn giữ trên trình chỉnh sửa để hiển thị tùy chọn dán).</li>
                </ol>

                <img src={imgStep4} alt="Outlook iOS Signature Editor" style={imgStyle} />

                <ol style={{ ...listStyle, listStyleType: 'decimal' }} start={6}>
                    <li>Đóng cài đặt, soạn một email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <img src={imgStep5} alt="Outlook iOS Compose Email" style={imgStyle} />
            </div>
        </div>
    );
};

export default OutlookIosInstructions;
