import { Component, OnInit } from '@angular/core';
import E from 'wangeditor';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {
  editor: any;

  constructor() { }

  ngOnInit(): void {
    this.editor = new E('#toolbar-container', '#text-container')
    this.setEditorConfig()
    this.editor.create()
  }

  // 获取富文本内容
  getEditor() {
    console.log(this.editor.txt.html()); // 获取HTML
    console.log(this.editor.txt.text()); // 获取text
    this.editor.txt.append('<p>追加的内容</p>'); // 继续追加内容。
  }

  // 禁用编辑器
  disableEditor() {
    this.editor.disable()
  }

  // 解禁编辑器
  enableEditor() {
    this.editor.enable()
  }


  // 设置富文本编辑器
  setEditorConfig() {
    // 菜单展示项配置
    this.editor.config.menus = this.getMenuConfig();
    // 使用 base64 保存图片
    this.editor.config.uploadImgShowBase64 = true;
    // 自定义配置颜色（字体颜色、背景色）
    this.editor.config.colors = this.getColorConfig();
  }

  // 设置可选颜色
  getColorConfig(): string[] {
    return [
      '#ffffff',
      '#000000',
      '#eeece0',
      '#1c487f',
      '#4d80bf',
      '#c24f4a',
      '#8baa4a',
      '#7b5ba1',
      '#46acc8',
      '#f9963b',
      '#0076B8',
      '#E2C08D',
      '#8EE153',
      '#B6001F'
    ];
  }

  // 获取显示菜单项
  getMenuConfig(): string[] {
    return [
      'bold',  // 粗体
      'italic',  // 斜体
      'underline',  // 下划线
      'head',  // 标题
      'fontName',  // 字体
      'fontSize',  // 字号
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'table',  // 表格
      'image',  // 插入图片
      // 'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ];
  }

}
