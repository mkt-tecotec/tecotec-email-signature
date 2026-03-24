import React from 'react';

const IosMailInstructions = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '11px',
            width: '100%',
            maxWidth: '954px',
            fontFamily: '"Inter", sans-serif'
        }}>
            <ol style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0, paddingLeft: '21px', listStyleType: 'decimal' }} start={1}>
                <li>Truy cập ứng dụng Cài đặt trên thiết bị iOS của bạn. Cuộn xuống và chọn Mail (hoặc Cài đặt → Ứng dụng → Mail trên một số phiên bản). Sau đó cuộn xuống phần Composing và nhấp vào Signature.</li>
            </ol>

            <img
                src="./images/guides/mail_app__ios__1.jpg"
                alt="Instruction Step 1"
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    marginTop: '11px',
                    marginBottom: '11px',
                    borderRadius: '6px'
                }}
            />

            <ol style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0, paddingLeft: '21px', listStyleType: 'decimal' }} start={2}>
                <li>Sao chép và dán chữ ký của bạn vào trình chỉnh sửa chữ ký (nhấn giữ trên trình chỉnh sửa để hiển thị tùy chọn dán).</li>
            </ol>

            <img
                src="./images/guides/mail_app__ios__2.jpg"
                alt="Instruction Step 2"
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    marginTop: '11px',
                    marginBottom: '11px',
                    borderRadius: '6px'
                }}
            />

            <ol style={{ fontSize: '14px', fontWeight: '500', lineHeight: '21px', color: '#000000', margin: 0, paddingLeft: '21px', listStyleType: 'decimal' }} start={3}>
                <li>Truy cập ứng dụng Mail, soạn email mới và tận hưởng chữ ký mới của bạn!</li>
            </ol>

            <img
                src="./images/guides/mail_app__ios__3.jpg"
                alt="Instruction Step 3"
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    marginTop: '11px',
                    borderRadius: '6px'
                }}
            />
        </div>
    );
};

export default IosMailInstructions;
