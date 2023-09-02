function updateLivePreview() {
    const htmlCode = document.getElementById('htmlInput').value;
    const cssCode = `<style>${document.getElementById('cssInput').value}</style>`;
    const jsCode = `<script>${document.getElementById('jsInput').value}<\/script>`;

    const combinedCode = htmlCode + cssCode + jsCode;

    const blob = new Blob([combinedCode], { type: 'text/html' });
    const blobURL = URL.createObjectURL(blob);

    const iframe = document.getElementById('preview');
    iframe.src = blobURL;
}
