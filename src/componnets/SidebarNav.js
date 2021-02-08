// @flow
import React, { useEffect } from "react";
import SidebarNavItem from "./SidebarNavItem";
import SidebarNavItemLink from "./SidebarNavItemLink";
type Props = {};

export const SidebarNav = (props: Props) => {
  return (
    <>
      <nav className="mt-2">
        <ul
          id="menu"
          className="nav nav-pills nav-sidebar flex-column metismenu"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <SidebarNavItem icon="tachometer-alt" title="Dashboard">
            <SidebarNavItemLink title="Dashboard v1" link="/" />
            <SidebarNavItemLink title="Dashboard v2" link="/" />
            <SidebarNavItemLink title="Dashboard v3" link="/" />
          </SidebarNavItem>
          <SidebarNavItem
            icon="th"
            title="Widgets"
            badge={{ title: "New", css: "badge-danger" }}
            link="/pages/widgets"
          />
          <SidebarNavItem
            icon="copy"
            title="Layout Options"
            badge={{ title: "6", css: "badge-info" }}
          >
            <SidebarNavItemLink title="Top Navigatio" link="/" />
            <SidebarNavItemLink title="Top Navigation  Sidebar" link="/" />
            <SidebarNavItemLink title="Boxed" link="/" />
            <SidebarNavItemLink title="Fixed Sidebar" link="/" />
            <SidebarNavItemLink title={"Fixed Sidebar Custom"} link="/" />
            <SidebarNavItemLink title="Fixed Navbar" link="/" />
            <SidebarNavItemLink title="Fixed Footer" link="/" />
            <SidebarNavItemLink title="Collapsed Sidebar" link="/" />
          </SidebarNavItem>

          <SidebarNavItem icon="chart-pie" title="Charts">
            <SidebarNavItemLink title="ChartJS" link="/" />
            <SidebarNavItemLink title="Flot" link="/" />
            <SidebarNavItemLink title="Inline" link="/" />
            <SidebarNavItemLink title="uPlot" link="/" />
          </SidebarNavItem>

          <SidebarNavItem icon="tree" title="UI Elements">
            <SidebarNavItemLink title="General" link="/" />
            <SidebarNavItemLink title="Icons" link="/" />
            <SidebarNavItemLink title="Buttons" link="/" />
            <SidebarNavItemLink title="Sliders" link="/" />
            <SidebarNavItemLink title="Modals & Alerts" link="/" />
            <SidebarNavItemLink title="Navbar & Tabs" link="/" />
            <SidebarNavItemLink title="Timeline" link="/" />
            <SidebarNavItemLink title="Ribbons" link="/" />
          </SidebarNavItem>

          <SidebarNavItem icon="edit" title="Forms">
            <SidebarNavItemLink title="General Elements" link="/" />
            <SidebarNavItemLink title="Advanced Elements" link="/" />
            <SidebarNavItemLink title="Editors" link="/" />
            <SidebarNavItemLink title="Validation" link="/" />
          </SidebarNavItem>

          <SidebarNavItem icon="table" title="Tables">
            <SidebarNavItemLink title="Simple Tables" link="/" />
            <SidebarNavItemLink title="DataTables" link="/" />
            <SidebarNavItemLink title="jsGrid" link="/" />
          </SidebarNavItem>
          <li className="nav-header">EXAMPLES</li>

          <SidebarNavItem
            icon="calendar-alt"
            title="Calendar"
            badge={{ title: "6", css: "badge-info" }}
          />
          <SidebarNavItem icon="image" title="Gallery" />
          <SidebarNavItem icon="columns" title="Kanban Board" />


          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-envelope"></i>
              <p>
                Mailbox
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="../mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-book"></i>
              <p>
                Pages
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="../examples/invoice.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Invoice</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/profile.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Profile</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/e-commerce.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>E-commerce</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/projects.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Projects</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/project-add.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Project Add</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/project-edit.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Project Edit</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/project-detail.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Project Detail</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/contacts.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Contacts</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/faq.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>FAQ</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/contact-us.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Contact us</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-plus-square"></i>
              <p>
                Extras
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>
                    Login & Register v1
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Login v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Register v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/forgot-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Forgot Password v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/recover-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Recover Password v1</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>
                    Login & Register v2
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../examples/login-v2.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Login v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/register-v2.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Register v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/forgot-password-v2.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Forgot Password v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/recover-password-v2.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Recover Password v2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="../examples/lockscreen.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Lockscreen</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="../examples/legacy-user-menu.html"
                  className="nav-link"
                >
                  <i className="far fa-circle nav-icon"></i>
                  <p>Legacy User Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/language-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Language Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/404.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Error 404</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/500.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Error 500</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/pace.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Pace</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../examples/blank.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Blank Page</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../../starter.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Starter Page</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-search"></i>
              <p>
                Search
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="../search/simple.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Simple Search</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../search/enhanced.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Enhanced</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">MISCELLANEOUS</li>
          <li className="nav-item">
            <a href="../../iframe.html" className="nav-link">
              <i className="nav-icon fas fa-ellipsis-h"></i>
              <p>Tabbed IFrame Plugin</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://adminlte.io/docs/3.1/" className="nav-link">
              <i className="nav-icon fas fa-file"></i>
              <p>Documentation</p>
            </a>
          </li>
          <li className="nav-header">MULTI LEVEL EXAMPLE</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-circle nav-icon"></i>
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-circle"></i>
              <p>
                Level 1<i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Level 2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>
                    Level 2<i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Level 2</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-circle nav-icon"></i>
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-header">LABELS</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-danger"></i>
              <p className="text">Important</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-warning"></i>
              <p>Warning</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-info"></i>
              <p>Informational</p>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
