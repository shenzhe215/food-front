import React, { memo, Fragment } from "react";
import { AppFooterWrapper, FooterLeft, FooterRight } from "./style";
import { footerLinks, footerImages } from "@/common/local-data";

const FDAppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className="left">
          <div className="link">
            {footerLinks.map((item) => {
              return (
                <Fragment key={item.title}>
                  <span
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </span>
                  <span className="line">|</span>
                </Fragment>
              );
            })}
          </div>
          <div className="copyright">
            <span>ABCD版权所有©2021-2025</span>
            <span>
              湖北ABC公司运营：
              <span href="" rel="noopener noreferrer" target="_blank">
                鄂网文[2018]3506-263号
              </span>
            </span>
          </div>
          <div className="report">
            <span>违法和不良信息举报电话：0123-123456789</span>
            <span>
              举报邮箱：
              <a
                href="mailto:ncm5990@163.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                762777921@qq.com
              </a>
            </span>
          </div>
          <div className="info">
            <span>鄂A1-20210191-18</span>
            <a
              href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
              rel="noopener noreferrer"
              target="_blank"
            >
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </FooterLeft>
      </div>
    </AppFooterWrapper>
  );
});

export default FDAppFooter;
