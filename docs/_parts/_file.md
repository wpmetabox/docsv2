**Displaying uploaded files with links:**

```php
<?php $files = rwmb_meta( 'my_field_id' ); ?>
<h3>Uploaded files</h3>
<ul>
    <?php foreach ( $files as $file ) : ?>
        <li><a href="<?= $file['url']; ?>"><?= $file['name']; ?></a></li>
    <?php endforeach ?>
</ul>
```

or simpler:

```php
<h3>Uploaded files</h3>
<?php rwmb_the_value( 'my_field_id' ) ?>
```

`rwmb_the_value()` outputs files in an unordered list, while `rwmb_meta()` returns an array of files, each file has the following information:

```php
[
    'ID'    => 123,
    'name'  => 'intro.txt',
    'path'  => '/var/www/wp-content/uploads/intro.txt',
    'url'   => 'https://example.com/wp-content/uploads/intro.txt',
    'title' => 'Introduction',
];
```

**Displaying only one file:**

```php
<?php $files = rwmb_meta( 'my_field_id', ['limit' => 1] ) ?>
<?php $file = reset( $files ) ?>
<a class="button" href="<?= $file['url'] ?>">Download file</a>
```
