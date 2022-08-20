# Nav
Bootstrap's vue nav component is a simple wrapper for building navigation components 

<ClientOnly>
<b-container>
<b-card>
<b-nav>
  <b-nav-item>
    Home
  </b-nav-item>
    <b-nav-item>
    About
  </b-nav-item>
    <b-nav-item>
    New
  </b-nav-item>
    <b-nav-item disabled>
    Home
  </b-nav-item>

</b-nav>
</b-card>
</b-container>
</ClientOnly>

## Drop Down
Drops downs can be added  like so 

<ClientOnly>
<b-container>
<b-card>
  <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Dropdown"
      toggle-class="nav-link-custom"
      right
    >
      <b-dropdown-item>One</b-dropdown-item>
      <b-dropdown-item>Two</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Three</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</b-card>
</b-container>
</ClientOnly>

```html
  <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Dropdown"
      toggle-class="nav-link-custom"
      right
    >
      <b-dropdown-item>One</b-dropdown-item>
      <b-dropdown-item>Two</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Three</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
```

## Tab Style

<ClientOnly>
 <b-nav tabs>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</ClientOnly>

```html
 <b-nav tabs>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
```

## Pills Style

<ClientOnly>
<b-card>
 <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
  </b-card>
</ClientOnly>

```html
<b-card>
 <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</b-card>
```

## Vertical Orientation 
By default `<b-nav>` appear on a horizontal line. Stack your navigation by setting the vertical prop.

<ClientOnly>
  <b-nav vertical class="w-25">
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</ClientOnly>

```html
  <b-nav vertical class="w-25">
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>

```

## Nav Text
Use the `<b-nav-text>` child component to place plain text content into the nav:

<ClientOnly>
<b-container>
<b-card>
  <b-nav >
    <b-nav-item href="#1">Link 1</b-nav-item>
    <b-nav-item href="#2">Link 2</b-nav-item>
    <b-nav-text>Plain text</b-nav-text>
  </b-nav>
</b-card>
</b-container>
</ClientOnly>

```html
  <b-nav >
    <b-nav-item href="#1">Link 1</b-nav-item>
    <b-nav-item href="#2">Link 2</b-nav-item>
    <b-nav-text>Plain text</b-nav-text>
  </b-nav>
```

<ClientOnly>
<ComponentReference></ComponentReference>
</ClientOnly>