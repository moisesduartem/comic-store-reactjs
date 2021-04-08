import React, { Fragment } from 'react';

function ComicListCard() {
    return (
        <Fragment>
            <div className="ui card">
                <div className="image">
                    <img src="/images/avatar2/large/kristy.png" alt="Comic" />
                    <div className="content">
                        <a className="header">Kristy</a>
                        <div className="meta">
                            <span className="date">Joined in 2013</span>
                        </div>
                        <div className="description">
                            Kristy is an art director living in New York.
                    </div>
                    </div>
                    <div className="extra content">
                        <a>
                        <i className="user icon"></i>
                        22 Friends
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ComicListCard;