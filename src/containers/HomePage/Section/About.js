import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Top những bệnh viện lớn nhất Nghệ An hiện nay
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="95%" height="400px" src="https://www.youtube.com/embed/7nShewW8GC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            Xã hội hiện nay, nhu cầu chăm sóc sức khỏe luôn được đặt lên hàng đầu. Các bệnh viện đang ngày càng đầu tư hệ thống trang thiết bị hiện đại và đội ngũ y bác sĩ được đào tạo chuyên nghiệp nhất nhằm phục vụ tốt cho bệnh nhân. Tại Nghệ An trong những năm gần đây bộ máy y tế đang được phát triển tốt với nhiều bệnh viện lớn cả công và tư nhân.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);