import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import ItemRecommend from './ItemRecomend';
import ItemMedia from './ItemMedia';
const cx = classNames.bind(styles);

function SuggestedAccounts({ data, active, title }) {
    return (
        <div className={cx('suggestSongs', { active: active })}>
            <h3 className={cx('suggest-song-title')}>{title}</h3>
            <ul className={cx('suggest-song-list')}>
                {!data?.items
                    ? data?.map((item, index) => {
                          return <ItemRecommend key={item.keyword} data={item} icon={'fa-solid fa-arrow-trend-up'} />;
                      })
                    : data?.items &&
                      data?.items?.length > 0 &&
                      data?.items[0] &&
                      data?.items[0]?.keywords?.map((item, index) => {
                          return <ItemRecommend key={item.keyword} data={item} icon={'fa-solid fa-magnifying-glass'} />;
                      })}
            </ul>

            {data?.items && data?.items?.length > 0 && data?.items[1]?.suggestions && (
                <div className={cx('suggestion')}>
                    <h3 className={cx('suggest-song-title')}>Gợi ý kết quả</h3>
                    {data?.items &&
                        data?.items[1]?.suggestions?.map((item, index) => {
                            return <ItemMedia key={index} data={item} />;
                        })}
                </div>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    active: PropTypes.bool,
};

export default React.memo(SuggestedAccounts);
