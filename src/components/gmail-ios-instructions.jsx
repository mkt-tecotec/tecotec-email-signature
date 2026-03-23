import React from 'react';

const imgStep1 = "./assets/gmail-ios-step1.png";

const GmailIosInstructions = () => {
    const imgStyle = {
        width: '100%',
        maxWidth: '828px',
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
                    <li>Để sử dụng chữ ký tùy chỉnh của bạn qua Ứng dụng Gmail iOS, bạn cần cài đặt chữ ký của mình trên tài khoản webmail trước tiên.</li>
                    <li>Trong Ứng dụng Gmail, bạn cần đảm bảo rằng tùy chọn chữ ký di động bị tắt. Để tắt điều này, nhấp vào Biểu tượng Menu, nhấp vào Settings, chọn Tài khoản Gmail của bạn, Cài đặt Chữ ký và đặt công tắc Chữ ký Di động thành "Tắt".</li>
                    <li>Gửi email cho chính bạn để đảm bảo chữ ký xuất hiện.</li>
                </ol>

                <img src={imgStep1} alt="Gmail iOS Settings" style={imgStyle} />

                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Quan trọng: </strong>
                        Chữ ký sẽ không hiển thị trong trình soạn email. Cách duy nhất để kiểm tra nó hoạt động là gửi email cho chính bạn.
                    </p>

                    <p style={{ margin: '0 0 11px 0' }}>
                        Sau khi bạn cài đặt chữ ký vào tài khoản webmail, có thể mất một lúc trước khi nó bắt đầu gửi qua ứng dụng Gmail.
                    </p>

                    <p style={{ margin: '0 0 11px 0' }}>
                        Chúng tôi có thể làm cho chữ ký xuất hiện ngay lập tức bằng cách chuyển sang tài khoản Gmail khác và sau đó chuyển lại tài khoản chính của chúng tôi thông qua ứng dụng.
                    </p>

                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Khắc phục sự cố: </strong>
                        Chúng tôi cũng phát hiện ra rằng xóa tài khoản của chúng tôi khỏi ứng dụng và sau đó thêm lại tài khoản đã khiến chữ ký mới của chúng tôi tải ngay lập tức.
                    </p>

                    <p style={{ margin: 0 }}>
                        Vẫn không hiển thị? Vui lòng đảm bảo rằng bạn đã chọn chữ ký của mình làm tùy chọn thả xuống "Sử dụng cho Email mới" trong cài đặt webmail của bạn – <a href="#gmail_webmail" style={{ color: '#0066cc', textDecoration: 'underline', cursor: 'pointer' }}>xem hướng dẫn webmail</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GmailIosInstructions;
