"use strict";(self.webpackChunkmeetings_widget_code_generator_demo=self.webpackChunkmeetings_widget_code_generator_demo||[]).push([[4732],{42876:e=>{function a(e){!function(e){var a=/\\(?:[^a-z()[\]]|[a-z*]+)/i,t={"equation-command":{pattern:a,alias:"regex"}};e.languages.latex={comment:/%.*/m,cdata:{pattern:/(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:t,alias:"string"},{pattern:/(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:t,alias:"string"}],keyword:{pattern:/(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,lookbehind:!0,alias:"class-name"},function:{pattern:a,alias:"selector"},punctuation:/[[\]{}&]/},e.languages.tex=e.languages.latex,e.languages.context=e.languages.latex}(e)}e.exports=a,a.displayName="latex",a.aliases=["tex","context"]}}]);
//# sourceMappingURL=4732.bundle.js.map