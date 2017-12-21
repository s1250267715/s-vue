<template>
  <div>
    <quill-editor v-model="content"
                ref="myQuillEditor"
                class="editer"
                :options="editorOption"
                @ready="onEditorReady($event)">
  			</quill-editor>
</div>
</div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      toolbarOptions: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['image'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']                                         // remove formatting button
      ],
      content: '',
      editorOption: {
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['image'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'color': [] }, { 'background': [] }]]        // dropdown with defaults from theme
        },
        placeholder: '请输入图文详情',
        theme: 'snow'  // or 'bubble'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  components: {
    quillEditor
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    submit () {
      console.log(this.content)
    }
  }
}
</script>

<style lang="less">

</style>
