import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Copy, Download, Link as LinkIcon } from 'lucide-react';

export default function App() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState('');
  const [templateHtml, setTemplateHtml] = useState('');
  const [formData, setFormData] = useState({
    name: 'Tuyen Pham',
    position: 'Marketing Manager',
    department: 'Marketing Dept',
    phone: '+84 987 654 321',
    email: 'tuyenpv@tecotec.com.vn',
    website: 'tecotec.com.vn',
    address: '2nd Floor, CT3A Building, Mễ Trì Thượng, Nam Từ Liêm, HN',
  });
  const [toastMessage, setToastMessage] = useState('');
  const [expandedGuide, setExpandedGuide] = useState(null);
  
  const previewRef = useRef(null);

  // Fetch templates.json on mount
  useEffect(() => {
    fetch('/tecotec-email-signature/templates.json')
      .then(res => res.json())
      .then(data => {
        setTemplates(data);
        if (data.length > 0) {
          setSelectedTemplateId(data[0].id);
        }
      })
      .catch(err => {
        // Fallback for local dev without base path
        fetch('/templates.json')
          .then(res => res.json())
          .then(data => {
            setTemplates(data);
            if (data.length > 0) {
              setSelectedTemplateId(data[0].id);
            }
          })
          .catch(e => console.error("Could not load templates.json", e));
      });
  }, []);

  // Fetch HTML file when selected Template changes
  useEffect(() => {
    if (!selectedTemplateId) return;
    const template = templates.find(t => t.id === selectedTemplateId);
    if (template) {
      // Try with /tecotec-email-signature/ first (GitHub Pages base)
      fetch(`/tecotec-email-signature${template.htmlPath}`)
        .then(res => res.text())
        .then(html => setTemplateHtml(html))
        .catch(() => {
          // Fallback dev local
          fetch(template.htmlPath)
            .then(res => res.text())
            .then(html => setTemplateHtml(html));
        });
    }
  }, [selectedTemplateId, templates]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Generate the final HTML with replaced variables
  const generateSignatureHtml = () => {
    if (!templateHtml) return '<p>Loading template...</p>';
    
    let html = templateHtml;
    // Replace standard placeholders
    html = html.replace(/{{name}}/g, formData.name || '');
    html = html.replace(/{{position}}/g, formData.position || '');
    html = html.replace(/{{department}}/g, formData.department || '');
    html = html.replace(/{{phone}}/g, formData.phone || '');
    html = html.replace(/{{email}}/g, formData.email || '');
    html = html.replace(/{{website}}/g, formData.website || '');
    html = html.replace(/{{address}}/g, formData.address || '');
    
    // Convert relative logo paths to absolute if needed, or leave them if they are hosted like https://marcom...
    
    return html;
  };

  const copyToClipboard = () => {
    if (previewRef.current) {
      const range = document.createRange();
      range.selectNode(previewRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        showToast('Đã sao chép chữ ký vào khay nhớ tạm!');
      } catch (err) {
        showToast('Lỗi khi sao chép');
      }
      selection.removeAllRanges();
    }
  };

  const downloadHtml = () => {
    const finalHtml = generateSignatureHtml();
    const blob = new Blob([finalHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'signature.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const guides = [
    {
      id: 'gmail',
      title: 'Gmail (Web)',
      content: [
        'Nhấn nút "Sao chép chữ ký" ở bên trên.',
        'Mở Gmail, vào Cài đặt (biểu tượng bánh răng) > Xem tất cả cài đặt.',
        'Kéo xuống phần "Chữ ký" (Signature).',
        'Tạo chữ ký mới, sau đó Dán (Ctrl+V / Cmd+V) nội dung vào khung soạn thảo.',
        'Chọn chữ ký vừa tạo cho "Email sử dụng mới" hoặc "Email trả lời/chuyển tiếp".',
        'Kéo xuống cuối trang và nhấn "Lưu thay đổi".'
      ]
    },
    {
      id: 'outlook_win',
      title: 'Outlook (Windows)',
      content: [
        'Nhấn nút "Sao chép chữ ký".',
        'Mở Outlook, vào File > Options > Mail > Signatures.',
        'Nhấn "New" để tạo chữ ký mới.',
        'Dán (Ctrl+V) vào ô soạn thảo. Đảm bảo ô "Keep Source Formatting" được chọn để giữ nguyên thiết kế.',
        'Nhấn OK để lưu lại.'
      ]
    },
    {
      id: 'apple_mail',
      title: 'Apple Mail (macOS)',
      content: [
        'Nhấn nút "Sao chép chữ ký".',
        'Mở ứng dụng Mail, vào Mail > Settings (hoặc Preferences) > Signatures.',
        'Chọn tài khoản email bên cột trái, nhấn dấu cộng (+) ở giữa.',
        'Bỏ chọn ô "Always match my default message font".',
        'Dán (Cmd+V) vào ô bên phải. Đừng lo lắng nếu ảnh không hiển thị đúng ở đây, nó sẽ hiển thị bình thường khi soạn email.',
        'Tắt cửa sổ để lưu.'
      ]
    }
  ];

  return (
    <div className="container">
      <header>
        <div className="logo-text">TECOTEC</div>
        <h1>Email Signature Generator</h1>
        <a href="#guide" className="header-link">Hướng dẫn cài đặt</a>
      </header>

      <div className="workspace">
        {/* Left Column: Form */}
        <div className="card">
          <h2 className="card-title">Nhập thông tin cá nhân</h2>
          
          <div className="form-group">
            <label>Mẫu chữ ký (Identity)</label>
            <select 
              className="form-control" 
              value={selectedTemplateId} 
              onChange={(e) => setSelectedTemplateId(e.target.value)}
            >
              {templates.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Họ và tên *</label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required
            />
          </div>

          <div className="form-group">
            <label>Chức vụ</label>
            <input 
              type="text" 
              className="form-control" 
              name="position" 
              value={formData.position} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input 
              type="tel" 
              className="form-control" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required
            />
          </div>

          <div className="actions">
            <button className="btn btn-primary" onClick={copyToClipboard}>
              <Copy size={16} /> Sao chép chữ ký
            </button>
            <button className="btn btn-secondary" onClick={downloadHtml}>
              <Download size={16} /> Tải xuống HTML
            </button>
          </div>
          
          <div style={{marginTop: '16px', textAlign: 'center'}}>
             <a href="#guide" className="header-link">Hướng dẫn cài đặt ↓</a>
          </div>
        </div>

        {/* Right Column: Preview */}
        <div className="card">
          <h2 className="card-title">Xem trước chữ ký (Live Preview)</h2>
          <div className="preview-area">
            {/* We render the raw HTML using dangerouslySetInnerHTML */}
            <div 
              ref={previewRef}
              dangerouslySetInnerHTML={{ __html: generateSignatureHtml() }}
            />
          </div>
        </div>
      </div>

      <div className="guide-section" id="guide">
        <h2>Hướng dẫn cài đặt</h2>
        <div className="accordion">
          {guides.map(guide => (
            <div className="accordion-item" key={guide.id}>
              <button 
                className="accordion-header"
                onClick={() => setExpandedGuide(expandedGuide === guide.id ? null : guide.id)}
              >
                <span>{guide.title}</span>
                <ChevronDown 
                  size={20} 
                  style={{
                    transform: expandedGuide === guide.id ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s'
                  }} 
                />
              </button>
              <div 
                className={`accordion-content ${expandedGuide === guide.id ? 'open' : ''}`}
                style={{ 
                  maxHeight: expandedGuide === guide.id ? '500px' : '0',
                  padding: expandedGuide === guide.id ? '0 24px 24px' : '0 24px'
                }}
              >
                <ol>
                  {guide.content.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        &copy; {new Date().getFullYear()} TECOTEC Group. All rights reserved.
      </footer>

      {/* Toast Notification */}
      <div className={`toast ${toastMessage ? 'show' : ''}`}>
        {toastMessage}
      </div>
    </div>
  );
}
