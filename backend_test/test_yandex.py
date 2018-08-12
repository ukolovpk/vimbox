import requests
import pytest


def test_yandex():
    r = requests.get('https://www.yandex.ru/search/?text=test')
    assert 'Испытание' in r.text


if __name__ == "__main__":
    pytest.main()