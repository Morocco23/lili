export default function GoogleFormEmbed({ formUrl }) {
  // If no URL is passed → show placeholder message
  if (!formUrl || formUrl.includes('YOUR_FORM_ID')) {
    return (
      <div style={{
        padding: '2.5rem',
        background: '#f1f5f9',
        borderRadius: '12px',
        textAlign: 'center',
        color: '#4b5563',
        border: '2px dashed #d1d5db'
      }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Google Form preview will appear here
        </p>
        <small>Replace formUrl prop with your real embedded form link</small>
      </div>
    );
  }

  return (
    <div className="enroll-iframe">
      <iframe
        src={formUrl}
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form - Lesson / Quiz / Enrollment"
        allow="autoplay; encrypted-media"
      >
        Loading Google Form…
      </iframe>
    </div>
  );
}