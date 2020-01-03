# 安装依赖
npm install
# ng-zorro-antd
执行以下命令后将自动完成 ng-zorro-antd 的初始化配置，包括引入国际化文件，导入模块，引入样式文件等工作。  ng add ng-zorro-antd
# 安装组件
npm install ng-zorro-antd --save
# 引入模块
```
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule
  ],
  bootstrap: [ AppComponent ],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class AppModule { }
```
# 引入样式与 SVG 资源
在 angular.json 文件中引入样式和 SVG icon 资源。

如果需要自定义主题样式，请参考自定义主题部分。
```
{
  "assets": [
    ...
    {
      "glob": "**/*",
      "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
      "output": "/assets/"
    }
  ],
  "styles": [
    ...
    "node_modules/ng-zorro-antd/ng-zorro-antd.min.css"
  ]
}
```
# 单独引入某个组件
你可以通过引入子 module 和单独打包的 CSS/less 文件来单独使用某个组件。  

例如，你只想使用 Button 组件，那么你就可以引入 NzButtonModule 而不是 NgZorroAntdModule，在 style.css 里导入组件对应的样式文件而不是全部的样式文件。  

在 module 文件里：  
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    CommonModule,
    NzButtonModule
  ]
})
export class YourModule { }
```
在 style.css 文件里： 
```
@import "~ng-zorro-antd/style/index.min.css"; /* 引入基本样式 */
@import "~ng-zorro-antd/button/style/index.min.css"; /* 引入组件样式 */
```