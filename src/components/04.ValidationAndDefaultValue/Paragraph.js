import PropTypes from 'prop-types';

function Paragraph({required_text, default_text, integer}) {
    return (
        <>
            <p>Required text: { required_text }</p>
            <p>Default text: { default_text }</p>
            <p>Number: { integer }</p>
        </>
    );
}

Paragraph.propTypes = {
    required_text: PropTypes.string.isRequired,
    default_text: PropTypes.string,
    integer: PropTypes.number,
}

Paragraph.defaultProps = {
    default_text: "This is the default text.",
}

export default Paragraph;