import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadArr: Array<any> = []; // 文件数组

  constructor() { }

  ngOnInit(): void {
  }

  uploadClick() {
    setTimeout(() => {
      const clickIpu = document.getElementById('upload_ipt');
      clickIpu?.click();
    }, 1000)
  }

  getUpload(evt: any) {
    let isImageFlag = true;
    const target = evt.target;

    const file = target.files[0];
    const myReader = new FileReader();
    const that = this;
    const size = file.size / (1024 * 1024);
    const reg = /jpg|jpeg|png|gif|doc|docx|xls|xlsx|pdf|ceb|text|txt|wps|et/i;
    const targetName = file.name;
    const indeX = targetName.indexOf('.');
    const uploadFileName = targetName.substr(0, indeX);
    if (size > 2) {
        // that.message.warning('请上传低于2M的文件');
        target.value = '';
        return;
    }
    if (!reg.test(targetName)) {
        // that.message.warning('不支持该文件格式');
        target.value = '';
        return;
    }
    if (/jpg|jpeg|png|gif/i.test(targetName)) {
        isImageFlag = true;
    } else {
        isImageFlag = false
    }
    myReader.onloadend = function (loadEvent: any) {
        const fileArray = {
            src: loadEvent.target.result,
            fileName: targetName,
            uploadFileName: uploadFileName,
            isImageFlag: isImageFlag,
            file: file,
            size: file.size
        };
        that.uploadArr.push(fileArray)
        console.log(that.uploadArr)
        target.value = '';
    };
    myReader.readAsDataURL(file);
  }

}
