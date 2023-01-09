# clean_html function from the R package salinasr, https://github.com/knapply/salinasr

clean_html <- function(x) {
  if(!is.character(x)) {
    stop("`x` is not a `character`.")
  }
  out <- str_replace_all(x, "<.*?>", " ")
  out <- str_squish(out)
  str_trim(out)
}
