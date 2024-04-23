import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
//import ReactQuill from "react-quill";
import "./index.scss";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  sendStatus,
   setStatus,
   status,
}) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
         // setPostImage("");
         // setCurrentPost({});
        }}
        onCancel={() => {
           setStatus("");
          setModalOpen(false);
          // setPostImage("");
          // setCurrentPost({});
        }}
        footer={[
              <Button
                onClick={sendStatus}
                key="submit"
                type="primary"
                disabled={status.length > 0 ? false : true}>
                  Post
              </Button>,
            ]}>
        <input
            className="modal-input"
            placeholder="Share Something Useful.."
             onChange={(event)=>setStatus(event.target.value)}
             value={status}
          />
         
        </Modal>
        </>
      );
    };
   export default ModalComponent;
      //   footer={[
      //     <Button
      //       onClick={isEdit ? updateStatus : sendStatus}
      //       key="submit"
      //       type="primary"
      //       disabled={status.length > 0 ? false : true}
      //     >
      //       {isEdit ? "Update" : "Post"}
      //     </Button>,
      //   ]}
      // >
      //   <div className="posts-body">
      //     <ReactQuill
      //       className="modal-input"
      //       theme="snow"
      //       value={status}
      //       placeholder="Share Something Useful.."
      //       onChange={setStatus}
      //     />
      //     {progress === 0 || progress === 100 ? (
      //       <></>
      //     ) : (
      //       <div className="progress-bar">
      //         <Progress type="circle" percent={progress} />
      //       </div>
      //     )}
      //     {postImage?.length > 0 || currentPost?.postImage?.length ? (
      //       <img
      //         className="preview-image"
      //         src={postImage || currentPost?.postImage}
      //         alt="postImage"
      //       />
      //     ) : (
      //       <></>
      //     )}
      //   </div>
      //   <label for="pic-upload">
      //     <AiOutlinePicture size={35} className="picture-icon" />
      //   </label>
      //   <input
      //     id="pic-upload"
      //     type={"file"}
      //     hidden
      //     onChange={(event) =>
      //       uploadPostImage(event.target.files[0], setPostImage, setProgress)
      //     }
      //   />
     

// export default ModalComponent;