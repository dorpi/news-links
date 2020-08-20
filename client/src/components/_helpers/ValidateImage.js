
const MAX_SIZE= 2*1024*1024;

export const validateImage = (file)=> {
    
    let message='';
    
    if (file.size>MAX_SIZE){
        
        message="Invaild : File too large to upload. The maximum size is 2MB";
    }
    if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
        message='Only .png, .jpg and .jpeg format allowed!';
    }
    return message;
   

    
}
