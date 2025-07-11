Список и детали
===

[![pages-build-deployment](https://github.com/BudTon/ra_hooks-context_use-effect/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/BudTon/ra_hooks-context_use-effect/actions/workflows/pages/pages-build-deployment)

[GITHUB Pages](https://BudTon.github.io/ra_hooks-context_use-effect/)

Вы решили потренироваться в использовании хука `useEffect` и реализовать следующее приложение — список с пользователями, в котором при клике на пользователя рядом появляется окно, отображающее детальную информацию о нём:

![useEffect](./assets/use-effect.png)

При первой загрузке ни один из элементов не выбран, поэтому отображается только список:

![First load](./assets/first-load.png)

## Механика

Назовём первый компонент слева `List`, а второй справа — `Details`.

Реализуйте следующую логику:
* При загрузке приложения один раз делается запрос по адресу https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json и отрисовывается список в компоненте `List`.
* При клике на конкретный элемент списка в компонент `Details` передаётся один props: `info` (объект с полями `id` и `name`) и начинается загрузка данных по адресу: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json, где {id} — это ID пользователя из props.
* На время загрузки можете отображать индикатор загрузки. Протестируйте с помощью выставления ограничения пропускной способности сети в Dev Tools.

Важные моменты:
1. Вся загрузка должна происходить через хук `useEffect`. Подумайте, как организовать единоразовую загрузку и загрузку при каждом изменении `props.info.id`.
1. Обратите внимание, загрузка деталей должна происходить только при изменении `props.info.id`, а не при каждом рендере. То есть если на одного и того же пользователя кликнуть дважды, то загрузка произойдёт только в первый раз.
