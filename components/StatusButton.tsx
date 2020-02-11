import { ReactElement } from "react";

export const StatusButton: any = (status: string | null): ReactElement => {
  switch (status) {
    case "SUCCESS":
      return (
        <div className="ci-btn success">
          <div className="status-icon">
            <img src="/static/check.svg" />
          </div>
          <div className="badge-label success">passed</div>
        </div>
      );
    case "FAILURE":
      return (
        <div className="ci-btn failed">
          <div className="status-icon ">
            <img src="/static/error.svg" />
          </div>
          <div className="badge-label failed">failed</div>
        </div>
      );
    case "PENDING":
      return (
        <div className="ci-btn pending">
          <div className="status-icon ">
            <img src="/static/pending.svg" />
          </div>
          <div className="badge-label pending">pending</div>
        </div>
      );
    default:
      return (
        <div className="ci-btn null">
          <div className="status-icon pending">
            <img src="/static/null.svg" />
          </div>
          <div className="badge-label null">NO DATA</div>
        </div>
      );
  }
};
