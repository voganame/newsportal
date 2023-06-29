import {Component, EventEmitter, Output} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service'
import {HelpersService} from '../../services/helpers.service'

@Component({
  selector: 'app-modal-add-news',
  templateUrl: './modal-add-news.component.html',
  styleUrls: ['./modal-add-news.component.scss']
})
export class ModalAddNewsComponent {
  constructor(private LocalStorage: LocalStorageService, private HelpersService: HelpersService) {}

  @Output() close = new EventEmitter<void>()

  fileData = {
    id: '',
    title: '',
    description: '',
    titleImageUrl: '',
    publishedDate: ''
  }

  onFileSelected(event: any) {
    const reader = new FileReader()
    const file:File = event.target.files[0]

    if (file) {
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.fileData.titleImageUrl = reader.result as string
      }
    }
  }

  save() {
    if(this.fileData.title && this.fileData.description && this.fileData.titleImageUrl) {
      this.fileData.publishedDate = new Date().toString()
      this.fileData.id = this.HelpersService.randomString(8)

      this.LocalStorage.addNews(this.fileData)
      this.HelpersService.addPost(this.fileData)
    }
  }


}
