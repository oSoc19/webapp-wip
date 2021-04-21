import PropTypes from 'prop-types';
import ExternalLink from '../UI/ExternalLink';

const demoDayLink = null;

const DemoDayLink = ({ children: text }) => {
  if (!demoDayLink) return <>{text}</>;
  return (
    <ExternalLink href="https://demodayosoc20.eventbrite.co.uk/" target="_blank">
      {text}
    </ExternalLink>
  );
};

DemoDayLink.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DemoDayLink;
