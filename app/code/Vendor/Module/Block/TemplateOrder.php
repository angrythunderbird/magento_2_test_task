<?php

namespace Vendor\Module\Block;

class TemplateOrder extends \Magento\Framework\View\Element\Template
{
    protected $_template = "Vendor_Module::default_custom.phtml";

    public function customMethod()
    {
        return "FFF";
    }
}
