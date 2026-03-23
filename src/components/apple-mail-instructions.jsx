import React from 'react';

const AppleMailInstructions = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '11px',
            width: '100%',
            maxWidth: '1160px',
            fontFamily: '"Inter", sans-serif'
        }}>

            {/* Content Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                width: '100%',
                maxWidth: '954px',
                marginTop: '11px',
            }}>
                <ol style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0, paddingLeft: '21px', listStyleType: 'decimal' }} start={1}>
                    <li>Với ứng dụng Mail đang mở, nhấp vào Mail và sau đó Preferences ở góc trên cùng bên trái của màn hình của bạn.</li>
                    <li>Từ cửa sổ pop-up Preferences, nhấp vào tab Signatures.</li>
                    <li>Nhấp vào nút + ở dưới cùng của cột ở giữa.</li>
                    <li>Sao chép và dán chữ ký email mới của bạn vào cột bên phải và đóng cửa sổ pop-up để lưu.</li>
                </ol>

                <img
                    src="./assets/apple-mail-step1.png"
                    alt="Instruction Step 1"
                    style={{
                        width: '100%',
                        maxWidth: '433px',
                        boxShadow: '0px 4px 4px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)',
                        marginTop: '11px',
                        marginBottom: '11px',
                        borderRadius: '6px'
                    }}
                />

                <ol style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0, paddingLeft: '21px', listStyleType: 'decimal' }} start={5}>
                    <li>Chọn chữ ký mới của bạn trong trường "Choose Signature" gần cuối cửa sổ pop-up.</li>
                    <li>Đóng cửa sổ pop-up Preferences, soạn email mới và tận hưởng chữ ký mới của bạn!</li>
                </ol>

                <div style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000' }}>
                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Quan trọng:</strong> Trong bản xem trước này, hình ảnh sẽ xuất hiện trống. Đừng lo lắng – khi bạn thực sự soạn email, hình ảnh sẽ xuất hiện.
                    </p>
                    <p style={{ margin: '0 0 11px 0' }}>
                        <strong>Quan trọng:</strong> Đảm bảo rằng "Always match my default message font" không được chọn, nếu không chữ ký của bạn sẽ xuất hiện dưới dạng văn bản thường.
                    </p>
                    <p style={{ margin: 0 }}>
                        <strong>Quan trọng:</strong> Vẫn thấy phiên bản văn bản thường? Hãy thử bật "Place signature above quoted text" checkbox và dán chữ ký của bạn lại một lần nữa.
                    </p>
                </div>

                <img
                    src="./assets/apple-mail-step2.png"
                    alt="Instruction Step 2"
                    style={{
                        width: '100%',
                        maxWidth: '433px',
                        boxShadow: '0px 4px 4px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)',
                        marginTop: '11px',
                        borderRadius: '6px'
                    }}
                />
            </div>
        </div>
    );
};

export default AppleMailInstructions;
