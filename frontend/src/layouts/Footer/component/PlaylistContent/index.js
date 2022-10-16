import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ItemPlay from '~/components/ItemPlay';

import style from './PlaylistContent.module.scss';

const cx = classNames.bind(style);

function PlaylistContent({ active }) {
    return (
        <div className={cx('footer-playlist-content', { active: active })}>
            <ItemPlay />
        </div>
    );
}
PlaylistContent.propTypes = {
    active: PropTypes.bool.isRequired,
};
export default PlaylistContent;
