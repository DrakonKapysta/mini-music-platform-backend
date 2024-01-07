import * as path from 'path';
import * as uuid from 'uuid';
class FileService{
    async saveFiles(files){
        let uploadPath= '';
        const filesInfo = {};
        for(const key in files) {
            const type = files[key].mimetype.split('/')[0];
            switch (type) {
                case 'audio':
                    uploadPath = path.resolve('uploads', 'audio', files[key].name);
                    break;
                case 'image':
                    uploadPath = path.resolve('uploads', 'image', files[key].name);
                    break;
                default:
                    return null;
            }
            try {
                await files[key].mv(uploadPath);
                filesInfo[type]={fileName:files[key].name, uploadPath, mimetype: files[key].mimetype};
            }catch (err){
                console.log(err)
                return null;
            }
        }
        return filesInfo;
    }
}
export default new FileService();