import { VIEWER_FONT_DATA, VIEWER_THEME_DATA } from '@data/ViewerModeData';
import RadioGroup from '@pages/Viewer/components/ViewerHeader/components/RadioGroup/RadioGroup';
import Button from '@components/Button/Button';
import './ViewerModeSwitcher.scss';

const ViewerModeSwitcher = ({
  selectFondMode,
  selectThemeMode,
  fontMode,
  toggleViewerModeSwitcherLayer,
}) => {
  return (
    <div className="viewer-mode-switcher-layer">
      <table>
        <caption>뷰어 모드 테이블</caption>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">
              <span className="icon icon-font">서체</span>
            </th>
            <td>
              <ul className="font-list">
                {VIEWER_FONT_DATA.map(({ value, text }, index) => {
                  return (
                    <li key={index}>
                      <button
                        type="button"
                        value={value}
                        onClick={selectFondMode}
                        className={`${fontMode === value ? 'active' : ''}`}
                      >
                        {text}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <span className="icon icon-theme">테마</span>
            </th>
            <td>
              <RadioGroup
                data={VIEWER_THEME_DATA}
                name="viewer-mode"
                onChange={selectThemeMode}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="btn-area">
        <Button
          size="large"
          color="primary"
          content="닫기"
          onClick={toggleViewerModeSwitcherLayer}
        />
      </div>
    </div>
  );
};

export default ViewerModeSwitcher;
