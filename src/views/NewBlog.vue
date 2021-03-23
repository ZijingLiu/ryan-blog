<template>
  <div id="editor-container">
    <quill-editor class="editor" ref="myEditor" :options="editorOptions" @focus="onEditorFocus($event)" ></quill-editor>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      editorOptions: {
        modules: {
          toolbar: [
            ["blockquote", "code-block"],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: 1 }, { header: 2 }],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            [{ font: [] }],
          ],
        },
      },
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    onEditorFocus(editor) {
      console.log("ass")
    }
  },
  computed: {
    editor() {
      console.log(this.$refs.myEditor.quill)
      return this.$refs.myEditor
    }
  },
  mounted: function () {
    console.log(quillEditor)
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.editor {
  height: 200px;
  // overflow: hidden;
}
</style>