import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="wf-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={name}>
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onchange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              height: 300,
              manubar: true,
              plugins: [
                "image",
                "autolink",
                "link",
                "lists",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "autosave",
                "directionality",
                "emoticons",
                "codesample",
                "autoresize",
              ],
              toolbar:
                "undo redo | blocks | image | link | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onchange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
