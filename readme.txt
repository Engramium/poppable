=== Poppable - The Easy Way to Add a Video Modal ===
Contributors:      engramium
Tags:              video block, video modal, popup, lightbox, play button
Requires at least: 6.7
Tested up to:      6.9
Requires PHP:      7.4
Stable tag:        1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Display YouTube videos in a beautiful, customizable modal popup triggered by any element on your page.

== Description ==

Poppable is a lightweight Gutenberg block that lets you display YouTube videos in a sleek modal popup. Simply add the block, paste your YouTube URL, and connect it to any trigger element on your page.

**Key Features:**

* **Trigger from Any Element** – Assign a trigger ID to any element (button, image, text) and clicking it opens the video modal
* **Multiple YouTube URL Formats** – Supports youtube.com/watch?v=, youtu.be/, and youtube.com/embed/ formats
* **Autoplay Support** – Optionally start playing the video automatically when the modal opens
* **Customizable Modal Width** – Set the content width using px, %, vw, or any CSS unit
* **Multiple Close Options:**
  * Close button (X) in the corner
  * Click outside to close
  * Press ESC key to close
* **Responsive Design** – Videos maintain 16:9 aspect ratio on all screen sizes
* **Body Scroll Lock** – Page scrolling is disabled when the modal is open for a focused viewing experience
* **Lightweight** – No jQuery dependencies, built with vanilla JavaScript

**Development & Source Code:**
LinkStar is open-source and developed publicly on GitHub.

GitHub repository: https://github.com/Engramium/poppable

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/poppable` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. In the block editor, search for "Poppable" and add the block to your page.

== How to Use ==

1. Add the **Poppable** block anywhere on your page (it will be hidden on the frontend).
2. In the block settings panel, enter your **YouTube Video URL**.
3. Set a unique **Trigger ID** (e.g., `poppable-video-modal`).
4. Add the same trigger ID as a CSS class to any element you want to use as the trigger (e.g., a button with class `poppable-video-modal`).
5. Configure your preferred close options and modal width.
6. Save and preview your page!

== Frequently Asked Questions ==

= How do I trigger the modal? =

Add the trigger ID you set in the block settings as a CSS class to any element. For example, if your trigger ID is `my-video-trigger`, add the class `my-video-trigger` to a button or image.

= Can I have multiple video modals on one page? =

Yes! Add multiple Poppable blocks with different trigger IDs, then assign each trigger ID to different elements on your page.

= What YouTube URL formats are supported? =

Poppable supports all common YouTube URL formats:
* `https://www.youtube.com/watch?v=VIDEO_ID`
* `https://youtu.be/VIDEO_ID`
* `https://www.youtube.com/embed/VIDEO_ID`

= Does the video stop when I close the modal? =

Yes, the video automatically stops and resets when the modal is closed.

== Changelog ==

= 1.0.0 =
* Converted to YouTube Video Popup Block

= 0.1 =
* Initial public release


