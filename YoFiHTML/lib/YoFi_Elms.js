"use strict";
class Yprops {
    h1 = "h1";
    h2 = "h2";
    h3 = "h3";
    h4 = "h4";
    h5 = "h5";
    h6 = "h6";
    div = "div";
    span = "span";
    p = "p";
    header = "header";
    li = "li";
    ul = "ul";
    main = "main";
    section = "section";
    script = "script";
    img = "img";
    br = "br";
    a = "a";
    button = "button";
    i = "i";
    iframe = "iframe";
    td = "td";
    tr = "tr";
    tbody = "tbody";
    table = "table";
    input = "input";
    source = "source";
    video = "video";
    audio = "audio";
    noscript = "noscript";
    label = "label";
}
class Y {
    static h1 = "h1";
    static h2 = "h2";
    static h3 = "h3";
    static h4 = "h4";
    static h5 = "h5";
    static h6 = "h6";
    static div = "div";
    static span = "span";
    static p = "p";
    static header = "header";
    static li = "li";
    static ul = "ul";
    static main = "main";
    static section = "section";
    static script = "script";
    static img = "img";
    static br = "br";
    static a = "a";
    static button = "button";
    static i = "i";
    static iframe = "iframe";
    static td = "td";
    static tr = "tr";
    static tbody = "tbody";
    static table = "table";
    static input = "input";
    static source = "source";
    static video = "video";
    static audio = "audio";
    static noscript = "noscript";
    static label = "label";
}
const _h1 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h1,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h1 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h1,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h2 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h2,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h2 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h2,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h3 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h3,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h3 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h3,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h4 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h4,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h4 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h4,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h5 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h5,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h5 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h5,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h6 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h6,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h6 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h6,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _div = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.div,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $div = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.div,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _span = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.span,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $span = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.span,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _p = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.p,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $p = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.p,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _header = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.header,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $header = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.header,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _li = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.li,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $li = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.li,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _ul = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ul,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $ul = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ul,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _main = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.main,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $main = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.main,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _section = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.section,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $section = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.section,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _script = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.script,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $script = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.script,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _img = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.img,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const $img = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const _br = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.br,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $br = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.br,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _a = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.a,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $a = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.a,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _button = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.button,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $button = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.button,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _i = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.i,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $i = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.i,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _iframe = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.iframe,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $iframe = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.iframe,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _td = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.td,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $td = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.td,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _tr = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tr,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $tr = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tr,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _tbody = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tbody,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $tbody = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tbody,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _table = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.table,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $table = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.table,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _input = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const $input = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const _source = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.source,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $source = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.source,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _video = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.video,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $video = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.video,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _audio = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.audio,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $audio = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.audio,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _noscript = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.noscript,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $noscript = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.noscript,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _label = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.label,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $label = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.label,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
