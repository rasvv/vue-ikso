cd dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:rasvv.github.io/vue-ikso.git master:gh-pages

cd..