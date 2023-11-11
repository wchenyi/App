body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  color: #333;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3CBD1C;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 调整z-index值 */
}

header input[type="text"] {
  width: 60vw; /* 使用vw单位 */
  height: 2.5rem;
  border-radius: 25px;
  border: none;
  padding-left: 1rem;
  outline: none;
}

header label {
  display: inline-block;
  position: relative;
}

header label input[type="checkbox"] {
  display: none;
}

header label span {
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background-color: #ccc;
  display: inline-block;
  transition: 0.5s; /* 增加过渡时间 */
  position: relative;
}

header label span:before {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  left: 0;
  top: 0;
  transition: 0.5s; /* 增加过渡时间 */
}

header label input[type="checkbox"]:checked + span {
  background-color: #3CBD1C;
}

header label input[type="checkbox"]:checked + span:before {
  left: 25px;
}

aside {
  width: 300px;
  background-color: #F4F4F4;
  position: fixed;
  top: 0;
  left: -300px;
  bottom: 0;
  z-index: 100;
  padding: 2rem;
  transition: left 0.5s; /* 增加过渡时间 */
}

aside.open {
  left: 0;
}

.main-logo {
  display: block;
  margin-bottom: 2rem;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
}

nav a {
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  color: #333;
  transition: 0.5s; /* 增加过渡时间 */
}

nav a:hover {
  background-color: #1DA15D;
  color: #fff;
}

main {
  margin-top: 4rem;
  padding: 2rem;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;
}

.app {
  text-align: center;
}

.app img {
  width: 100px;
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5rem;
}

.app a {
  color: #333;
  text-decoration: none;
}

.page {
  display: none;
}

.page.active {
  display: block;
}

body.dark {
  background-color: #222; /* 调整背景颜色 */
  color: #fff;
}

body.dark header {
  background-color: #3CBD1C;
}

body.dark aside {
  background-color: #F4F4F4;
}
