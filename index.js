import "./index.css";

function Magiklayout(options, children) {
  if (options.header === true) {
    return (
      <div>
        <div>
          <input type="checkbox" class="menu-toggle" id="menu-toggle" />
          <div class="mobile-bar">
            <label for="menu-toggle" class="menu-icon">
              <span></span>
            </label>
          </div>
          <header class="header"></header>

          <a
            class="navbar-brand"
            href={options.header_link}
            style="padding:0px;"
          >
            <img src={options.img} />
          </a>
        </div>

        {children}
      </div>
    );
  }
}
module.exports.Magiklayout = Magiklayout;
